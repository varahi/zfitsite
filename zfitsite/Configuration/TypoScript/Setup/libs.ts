# Logo
lib.logo >
lib.logo = COA
lib.logo {
  wrap = |
  10 = IMAGE
  10 {
    file = {$template_path}/Resources/Public/img/logo-white.png
    altText = {$page.header.logoTitle}
    titleText = {$page.header.logoTitle}
    file.width = 70
    #file.height = 94c
    stdWrap.typolink.parameter = 1
    stdWrap.wrap = |
    stdWrap.typolink.title = {$page.header.logoTitle}  
    stdWrap.typolink.ATagParams = class="navbar-brand"
  }
}