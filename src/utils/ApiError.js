class ApiError extends Error {
    constrcutor (
        statusCode,
        message="something went wrong",
        errors = [],
        statck = ""
    ){
        super(message)
        this.statuscode = this.statuscode
        this.data = null 
        this.message = message
        this.success = false;
        this.errors = errors

        if(stack){
            this.stack = stack
        }else {
          Error.captureStackTrace(this, this.constructor)  
        }
    }
}