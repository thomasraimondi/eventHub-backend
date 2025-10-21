const z = require("zod");

const checkDataUpdateProfile = (req, res, next) => {
  const { name, email, role } = req.body;

  const schema = z.object({
    name: z.string().min(3, { message: "Name must be at least 3 characters long" }),
    email: z.email({ message: "Invalid email" }),
    role: z.enum(["user", "organizer", "admin"], { message: "Role must be either user, organizer or admin" }).default("user"),
  });

  const { error } = schema.safeParse({ name, email, role });
  if (error) {
    const errorName = error.issues?.filter((issue) => issue.path[0] === "name")[0]?.message;
    const errorEmail = error.issues?.filter((issue) => issue.path[0] === "email")[0]?.message;
    const errorRole = error.issues?.filter((issue) => issue.path[0] === "role")[0]?.message;
    return res.status(400).json({
      errors: {
        name: errorName,
        email: errorEmail,
        role: errorRole,
      },
    });
  }

  next();
};

module.exports = { checkDataUpdateProfile };
