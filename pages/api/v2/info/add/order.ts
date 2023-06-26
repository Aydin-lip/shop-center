import UsersCollection from "@/db/usersV2";
import { IDeliverd, IProcessing } from "@/models/user";
import { NextApiHandler } from "next";

const Handler: NextApiHandler = async (req, res) => {
  if (req.method === "POST") {
    // get data body and check token
    const { deliverd, processing }: { deliverd: IDeliverd, processing: IProcessing } = req.body
    const { token } = req.headers
    if (!token) {
      res.status(400).json({ message: "There is no token in the header" })
      return
    }
    // checks to see if she has the deliverd || processing or not
    if (deliverd || processing) {
      // get collection token and info
      let { collectionToken, collectionInfo } = await UsersCollection()
      // get user info
      let userInfoAll = await collectionInfo.find({ token }).toArray()
      let userInfo = userInfoAll[0]
      if (userInfo) {
        // To shorten the text deliverd || processing for user
        let infoDeliverd: IDeliverd[] = userInfo.order.deliverd
        let infoProcessing: IProcessing[] = userInfo.order.processing

        // It creates a unique and new ID for each one
        let deliverdID: number =
          infoDeliverd[infoDeliverd.length - 1] ?
            infoDeliverd[infoDeliverd.length - 1].id + 1 : 1
        let processingID: number =
          infoProcessing[infoProcessing.length - 1] ?
            infoProcessing[infoProcessing.length - 1].id + 1 : 1

        // It checks to see which parameter we have sent to add
        let order = {
          deliverd: deliverd ? [...infoDeliverd, { ...deliverd, id: deliverdID }] : infoDeliverd,
          processing: processing ? [...infoProcessing, { ...processing, id: processingID }] : infoProcessing
        }
        // send
        try {
          await collectionInfo.updateOne({ token }, { $set: { order } })
          res.status(200).json({ message: "Success", order })
        } catch (err) {
          res.status(500).json({ message: "have a problem in database!" })
        }

      } else {
        res.status(404).json({ message: "not found account!" })
      }
    }

  } else {
    res.status(400).json({ message: "method is false!" })
  }
}

export default Handler;