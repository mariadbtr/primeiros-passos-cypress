import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import dashboardGrid from '../pages/dashboardPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'


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

    myInfoPage.fillPersonalDetails('Maria', 'Tramontin', 'Borba')
    myInfoPage.fillEmployeeDetails('EmployeeId', 'otherId', '666', '1993-05-10')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()
  })

  it('Login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessInvalid()
  })
})