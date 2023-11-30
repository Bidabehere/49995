import { Router } from "express";

const router = Router();

router.get("/foods", (req,res)=>{
    const foods = [
        { name: "Manzana", price: 20 },
        { name: "Banana", price: 10 },
        { name: "Pera", price: 5 },
        { name: "Frutilla", price: 30 },
      ];

      const user = {
        firstName:"Franco",
        lastName:"Jalil",
        isAdmin: true
      }

      res.render("foods", {foods, isAdmin: user.isAdmin, style:"index"} )
})

router.get("/register", (req,res)=>{
  
  res.render("register")

})

export default router;