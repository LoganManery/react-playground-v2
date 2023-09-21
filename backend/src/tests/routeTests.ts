import chai from 'chai'
import chaiHttp from 'chai-http'
import app from '../server.js'
import { Database } from '../database.js'

const expect = chai.expect;
const database = Database.getInstance()

chai.use(chaiHttp);

describe('Routes', () => {
  before(() => {
    
  })

  describe('GET /user', () => {
    it('should fetch users', async () => {
      const res = await chai.request(app).get('/user')
      expect(res.status).to.equal(200)
    })
  })

  describe('POST /create', async () => {
    it('should return 400 if fields are missing', async () => {
      const res = await chai.request(app).post('/create').send({username: '', password: '' })
      expect(res.status).to.equal(400)
    })
  })

  after(() => {
    database.close()
  })
})

