const user = {
  name: "user",
  title: "User",
  type: "document",
  fields: [
    {
      name: "username",
      title: "Username",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "password",
      title: "Password",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "role",
      title: "Role",
      type: "string",
      options: {
        list: ["Customer", "Admin"],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "orderHistory",
      title: "Order History",
      type: "array",
      of: [{ type: "reference", to: { type: "order" } }],
    },
  ],
};

export default user;
