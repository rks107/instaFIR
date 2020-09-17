// render sign up page
module.exports.signUp = function(req, res ){
    console.log("I'm here");
    return res.render("user_sign_up", {
      title: "instFIR | Sign Up",
    });
}