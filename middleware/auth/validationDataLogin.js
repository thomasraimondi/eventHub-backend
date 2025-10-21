const z = require("zod");

const validationDataLogin = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  const schema = z.object({
    email: z.email({ message: "Email is malformed" }),
  });

  const { error } = schema.safeParse({ email });
  if (error) {
    const errorEmail = error.issues?.filter((issue) => issue.path[0] === "email")[0]?.message;
    return res.status(400).json({
      email: errorEmail ? errorEmail : null,
    });
  }

  next();
};

module.exports = { validationDataLogin };
