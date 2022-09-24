const fakeUser = {
    username: "bj",
    loggedIn: true,
};

export const trending = (req, res) => {
    // const videos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const videos = [
        {
            title: "First Vdieo",
            rating: 5,
            comments: 2,
            createdAt: "2 minuts ago",
            views: 59,
            id: 1,
        },
        {
            title: "Second Vdieo",
            rating: 5,
            comments: 2,
            createdAt: "2 minuts ago",
            views: 59,
            id: 1,
        },
        {
            title: "Third Vdieo",
            rating: 5,
            comments: 2,
            createdAt: "2 minuts ago",
            views: 59,
            id: 1,
        },
    ];
    return res.render("home", { pageTitle: "Home", fakeUser, videos });
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
