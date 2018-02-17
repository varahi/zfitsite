config {
  doctype = html5
  xmlprologue = none
#  metaCharset = utf8
  renderCharset = utf-8
  admPanel = 0
  spamProtectEmailAddresses = 0
  simulateStaticDocuments = 0
  tx_realurl_enable = 1
  baseURL = http://{$domain}/
#  sys_language_mode = content_fallback
  pageTitleFirst = 1
  removeDefaultJS = 1

# Deafult language
#  sys_language_uid = 0
  language = ru
  locale_all = ru_RU
  htmlTag_langKey  = ru
  sys_language_uid = 0
  linkVars = L,type,cHash
  uniqueLinkVars = 1
  #absRefPrefix = http://{$domain}/
  prefixLocalAnchors = all
  
  concatenateJs = 1
  concatenateCss = 1
  compressJs = 1
  compressCss = 1  
  
  #typolinkCheckRootline = 1
  #typolinkEnableLinksAcrossDomains = 1
}

config.contentObjectExceptionHandler = 0

page.config.headerComment (
    T3Dev http://t3dev.ru/ 
    Dmitry Vasilev dmitry(at)t3dev.ru
    ____________________________________________________
)

// Page config
page = PAGE
page.10 = FLUIDTEMPLATE
page.10 {
  file = {$template_path}/index.html
  partialRootPath = {$template_path}/Resources/Private/Partials/
  layoutRootPath = {$template_path}/Resources/Private/Layouts/
  variables {
    content < styles.content.get
    content_right < styles.content.get
    content_right.select.where = colPos = 1
    
    content_left < styles.content.get
    content_left.select.where = colPos = 2   
    
    content_border < styles.content.get
    content_border.select.where = colPos = 3      
  }
}

page.10.file.stdWrap.cObject = CASE
page.10.file.stdWrap.cObject {
  key.data = levelfield:-1, backend_layout_next_level, slide
  key.override.field = backend_layout
  
  default = TEXT
  default.value = {$template_path}/Resources/Private/Templates/Page/Index.html
  
  # Main page
  1 = TEXT
  1.value  = {$template_path}/Resources/Private/Templates/Page/Index.html           

}