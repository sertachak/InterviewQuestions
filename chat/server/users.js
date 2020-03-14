const users = [];

const addUser = ({id, name, room}) => {
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    const mbUserAlreadyExist = users.find( (user) => {
      return user.room === room && user.name === name 
    })

    if( mbUserAlreadyExist )
        return { error: 'User Already In Room'}
    else{
        user = { id, name, room };
        users.push( user );
        return { user };
    }

    
}

const removeUser = (id) => {
    const index =users.findIndex( (user) => {
        return user.id === id;
    })

    if( index !== -1 )
        return users.splice(index, 1)[0];
}

const getUser = (id) => { 
    users.findIndex( (user) => {
        user.id === id;
    })
}

module.exports = {addUser, removeUser, getUser}