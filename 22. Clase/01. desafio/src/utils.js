import passport from "passport";

export const passportCall = (strategy) => {
    return async (req,res,next)=>{
        passport.authenticate(strategy, {session:false},function(err,user,info){
            if(err) return next(err);
            if(!user){
                return res.status(401).json({status:"error", error:info.toString()})
            }
            req.user = user;
            next()
        })(req,res,next)
    }
}

export const authorize = (role) =>{
    return async(req,res,next)=>{
        if(!req.user){
            return res.status(401).json({error:"usuario no autorizado."})
        }
        if(req.user.role !== role){
            return res.status(403).json({error:"Usuario sin permisos"})
        }
        next();
    }
}