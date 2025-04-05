const asyncHandler = (requestHnadler) => {
   return (req, res, next) => {
        Promise.resolve(requestHnadler(req, res, next)).
        catch((error) => next(error))
    }
}



export {asyncHandler}

//higher order function , wrapper fucntion


/*const asyncHandler = (fn) => async (req, res, next) => {
    try {
        await fn(req, res, next)
    } catch (error) {
        res.status(error.code || 500).json({
            success: false,
            message: error.message
        })
     
    }
}*/