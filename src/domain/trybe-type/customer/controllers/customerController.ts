import { Request, Response } from "express";
import statusCodes from "../../express/statusCodes";
import CustumerService from "../services/customerService"



export default class CustomerController  {
  service: CustumerService;

  constructor(){
    this.service = new CustumerService();
  }

  public getAllCustomers = async (req: Request, res: Response) => {
    const customers = await this.service.getAllCustomers()
    res.status(statusCodes.OK).json(customers)
  }

  public getByIdCustomer = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const custumer = await this.service.getByIdCustomer(id)

    if(!custumer.length) {
      return res.status(statusCodes.NOT_FOUND)
        .json({ message: 'Customer not found'})
    }
    res.status(statusCodes.OK).json(custumer)
  }


}