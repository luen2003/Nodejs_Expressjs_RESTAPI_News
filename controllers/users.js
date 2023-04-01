
let id_ = 0 ;
let users = [];

export const getUsers = (req, res) => {
    console.log(`Users in the database: ${users}`);

    res.send(users);
}

export const createUser = (req, res) => {   
    const user = req.body;
    const userWithId = {...user, id: ++id_};

    users.push(userWithId);
    
    console.log(`User ${user.title} added to the database.`);
};

export const getUser = (req, res) => {
    const id = req.params.id;
    const foundUser = users.find((user) => user.id == id );
    res.send(foundUser);
};

export const deleteUser = (req, res) => { 
    console.log(`user with id ${req.params.id} has been deleted`);
    
    users = users.filter((user) => user.id != req.params.id);
};

export const deleteUsers = (req,res) => {
    console.log(`All users has been deleted`);

    users = users.filter((user) => true);

}

export const updateUser =  (req,res) => {
    const user = users.find((user) => user.id == req.params.id);
    
    if (req.body.title) user.title = req.body.title;
    if (req.body.subtitle) user.subtitle = req.body.subtitle;
    if (req.body.link) user.link = req.body.link;

    console.log(`username has been updated to ${req.body.title}.age has been updated to ${req.body.subtitle}`)
};
