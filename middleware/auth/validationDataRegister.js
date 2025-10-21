const z = require("zod");

const validationDataRegister = (req, res, next) => {
  const { name, email, password, role } = req.body;

  if (!name || !email || !password || !role) {
    return res.status(400).json({ message: "Name, email, password and role are required" });
  }

  const schema = z.object({
    name: z.string().min(3, { message: "Name must be at least 3 characters long" }),
    email: z.email({ message: "Email is malformed" }),
    password: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/, {
      message: "Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one number and one special character",
    }),
    role: z.enum(["user", "organizer", "admin"], { message: "Role must be either user, organizer or admin" }).default("user"),
  });

  const { error } = schema.safeParse({ name, email, password, role });
  if (error) {
    const errorName = error.issues?.filter((issue) => issue.path[0] === "name")[0]?.message;
    const errorEmail = error.issues?.filter((issue) => issue.path[0] === "email")[0]?.message;
    const errorPassword = error.issues?.filter((issue) => issue.path[0] === "password")[0]?.message;
    const errorRole = error.issues?.filter((issue) => issue.path[0] === "role")[0]?.message;
    return res.status(400).json({
      errors: {
        name: errorName,
        email: errorEmail,
        password: errorPassword,
        role: errorRole,
      },
    });
  }

  next();
};

module.exports = { validationDataRegister };
