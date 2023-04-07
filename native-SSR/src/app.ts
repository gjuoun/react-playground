// import express from 'express'
// // import { getIronSession } from 'iron-session'
// import {ironSession} from 'iron-session/express'

// const app = express()

// declare module "iron-session" {
//   interface IronSessionData {
//     user?: {
//       name: string;
//     };
//   }
// }

// app.use(ironSession({
//   cookieName: "my-cookie",
//   password: "my-passwordmy-passwordmy-passwordmy-password",
// }))

// app.get('/', (req, res) => {
//   const user = req.session.user

//     res.header("Content-Type", "text/html; charset=utf-8")
//     res.send( `<form action="/login" method="post">
//       <input type="text" name="name" placeholder="name" />
//       <input type="submit" value="Login" />
//     </form>
//     ${user ? `<div>Hi ${user.name} </div> <form action="/logout" method="post"><input type="submit" value="Logout" /> `: ""}
//     `)
//   }
// )



// app.post('/login', async (req, res) => {
//   const user = { name: "John" };
//   req.session.user = user
//   await req.session.save()
//   res.send(`Hello ${user.name}!`)
// })

// app.post('/logout', (req, res) => {
//   req.session.destroy()
//   res.send('Logged out')
// })




// app.listen(3000, ()=> {
//   console.log('listen on port 3000')
// })


import { sealData, unsealData } from "iron-session";

async function main(){
  const seal = await sealData(
    {
      userId: "555"
    },
    {
      password: "complex_password_at_least_32_characters_long",
    },
  );

  console.log("sealed:",seal)


  const data = await unsealData(seal, {
    password: "complex_password_at_least_32_characters_lon",
  });

  console.log(  "unsealed", data)
}

main()

