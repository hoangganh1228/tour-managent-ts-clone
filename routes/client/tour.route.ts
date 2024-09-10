import { Router, Request, Response } from "express";
import Tour from "../../models/tour.model";
const router: Router = Router();

router.get("/", async (req: Request, res: Response) => {
  const tours = await Tour.findAll({
    where: {
      deleted: false,
      status: "active"
    },
    raw: true
  })


  res.render("client/pages/tours/index", {
    pageTitle: "Danh sách tour",
    tours: tours
  });
});

export const tourRoutes: Router = router;