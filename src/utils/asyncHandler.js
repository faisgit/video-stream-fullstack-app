const asyncHandler = (fun) => {
    return (req, res, next) => {
        Promise
        .resolve(fun(req, res, next))
        .catch((error) => next(error))
    }
}


export default asyncHandler

// const asyncHandler = (fun) => async (req, res, next) => {
//     try {
//         await fun(req, res, next)
//     } catch (error) {
//         res.status(error.code).json({
//             success: false,
//             message: error.message
//         })
//     }
// }