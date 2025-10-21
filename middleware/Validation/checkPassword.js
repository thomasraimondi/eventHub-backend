const z = require("zod");

const checkPassword = (req, res, next) => {
  const { password, confirmPassword } = req.body;

  if (!password || !confirmPassword) {
    return res.status(400).json({ message: "Password and confirm password are required" });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  const schema = z.object({
    password: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/, {
      message: "Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one number and one special character",
    }),
  });

  const { error } = schema.safeParse({ password, confirmPassword });
  if (error) {
    const errorPassword = error.issues?.filter((issue) => issue.path[0] === "password")[0]?.message;
    return res.status(400).json({
      errors: {
        password: errorPassword,
      },
    });
  }
  next();
};
module.exports = { checkPassword };
