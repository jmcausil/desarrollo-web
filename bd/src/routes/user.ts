import { request, Response, Application } from "express";
import { UserController } from "../controllers/user.controllers";

export class UserRoutes {
    public userController: UserController= new UserController();

    public routes(app: Application):  void {
        app.route('/users').get(this.userController.index)
    }

}

