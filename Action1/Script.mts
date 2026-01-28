
' 1. Open the Browser and navigate to URL
SystemUtil.Run "chrome.exe", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login" @@ hightlight id_;_65832_;_script infofile_;_ZIP::ssf9.xml_;_

Browser("OrangeHRM").Page("OrangeHRM").WebEdit("username").Set("Admin")
Browser("OrangeHRM").Page("OrangeHRM").WebEdit("password").Set("admin123")
wait 10
Browser("OrangeHRM").Page("OrangeHRM").WebButton("Login").Click

wait 20
dashboard = Browser("OrangeHRM").Page("OrangeHRM").WebElement("Dashboard").GetROProperty("innertext")

If  dashboard = "Dashboard"Then
	reporter.ReportEvent micPass, "dashboard exist", Dashboard
else
	reporter.ReportEvent micPass, "dashboard doeas not exist", Dashboard
End If
Browser("OrangeHRM").Page("OrangeHRM").WebElement("WebElement").Click
Browser("OrangeHRM").Page("OrangeHRM").Link("Logout").Click

'Browser("OrangeHRM").Close @@ hightlight id_;_1953180984_;_script infofile_;_ZIP::ssf7.xml_;_
