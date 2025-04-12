interface User {
  id: number;
  name: string;
  age: number;
  email: string;
  password: string;
}

type UpdateProps = Pick<User, 'name' | 'age' | 'email'>

function updateUser(updateProps: UpdateProps) {
    //data base call to update user
}
