import { Request, Response } from "express";
import statusCodes from "../../express/statusCodes";
import { ICustomer } from "../interface/customer";
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

  public saveCustomer = async(req: Request, res: Response) => {
    const custumer = req.body as ICustomer
    const result = await this.service.saveCustomer(custumer)
    return res.status(statusCodes.OK).json({ message: "Created" })

  }

  public updateCustomer = async(req: Request, res: Response) => {
    let id: number = parseInt(req.params.id, 10)
    const customer = req.body
    await this.service.updateCustomer(customer, id)
    return res.status(statusCodes.OK).send("customer updated")

  }

  public deleteCustomer = async(req: Request, res: Response) => {
    let id: number = parseInt(req.params.id, 10)
    await this.service.deleteCustomer(id)
    return res.status(statusCodes.OK).send("customer deleted")
  }



}