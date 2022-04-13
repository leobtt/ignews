import { NextApiRequest, NextApiResponse} from 'next'

export default (req : NextApiRequest, res : NextApiResponse)=>{
  const users = [
    {id:1, nome: 'leo'},
    {id:2, nome: 'Paulo'},
    {id:3, nome: 'Brasi'},
  ]

  return res.json(users)
}