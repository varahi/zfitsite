// CSS Header
page.headerData.10 >
page.headerData.10 = TEXT
page.headerData.10.value (
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
)
#page.headerData.10 >

# Css
page.includeCSS { 
  #css_file1 = https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css
  css_file10 = {$template_path}/Resources/Public/css/bootstrap.min.css
  #css_file11 = {$template_path}/Resources/Public/css/mdb.min.css
  css_file11 = {$template_path}/Resources/Public/css/mdbootstrap4.compiled.min.css
  css_file20 = {$template_path}/Resources/Public/font/proxima/fonts.css
  css_file100 = {$template_path}/Resources/Public/css/style.css
} 

page.includeJS {
  js_file1 = {$template_path}/Resources/Public/js/jquery-3.2.1.min.js
}

page.includeJSFooter {
  js_file2 = {$template_path}/Resources/Public/js/popper.min.js
  js_file3 = {$template_path}/Resources/Public/js/bootstrap.min.js
  #js_file4 = {$template_path}/Resources/Public/js/mdb.min.js
  js_file4 = {$template_path}/Resources/Public/js/mdbootstrap4.js.compiled.min.js
  js_file10 = {$template_path}/Resources/Public/js/japarallax.js
  js_file11 = {$template_path}/Resources/Public/js/jarallax-video.js
  js_file12 = {$template_path}/Resources/Public/js/wow.min.js
  js_file20 = https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js
  #js_file21 = https://unpkg.com/masonry-layout@4/dist/jquery.row-grid.min.js
  js_file100 = {$template_path}/Resources/Public/js/custom.js
}

page.footerData.10 >
page.footerData.10 = TEXT
page.footerData.10.value (
    <script>
        $('.carousel').carousel({
            interval: 3000,
        })
    </script>
)