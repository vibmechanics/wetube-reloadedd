export const trending = (req, res) => {
    res.render("home", { pageTitle: "Home" });
};
export const see = (req, res) => {
    console.log(res.req.params.id);
    res.render("watch", {
        pageTitle: "Watch",
        id: `${res.req.params.id}`,
    });
};
export const edit = (req, res) => {
    res.render("edit", { pageTitle: "Edit" });
};
export const search = (req, res) => res.send("Search Video");
export const upload = (req, res) => res.send("Upload Video");
export const remove = (req, res) => {
    res.send("Remove");
};
