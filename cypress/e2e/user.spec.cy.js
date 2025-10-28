import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import dashboardGrid from '../pages/dashboardPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const Chance = require('chance')

const chance = new Chance();
const dashboardPage = new DashboardPage()
const loginPage = new LoginPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()


describe('Orange HRM Tests', () => {
  
  it('User Info Update - sucess', () => {
    loginPage.accessLoginPage()   
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    
    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()

    myInfoPage.fillPersonalDetails(chance.first(), chance.last(), chance.string())
    myInfoPage.fillEmployeeDetails(chance.ssn({ ssnFour: true }), chance.ssn({ dashes: false }), chance.ssn({ dashes: false }), chance.date({string: true, american: false}))
    myInfoPage.fillStatus()
    myInfoPage.saveForm()
  })

})