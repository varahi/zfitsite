
plugin.tx_zfitsite {
    view {
        # cat=plugin.tx_zfitsite_zfitsite/file; type=string; label=Path to template root (FE)
        templateRootPath = EXT:zfitsite/Resources/Private/Templates/
        # cat=plugin.tx_zfitsite_zfitsite/file; type=string; label=Path to template partials (FE)
        partialRootPath = EXT:zfitsite/Resources/Private/Partials/
        # cat=plugin.tx_zfitsite_zfitsite/file; type=string; label=Path to template layouts (FE)
        layoutRootPath = EXT:zfitsite/Resources/Private/Layouts/
    }
    persistence {
        # cat=plugin.tx_zfitsite_zfitsite//a; type=string; label=Default storage PID
        storagePid =
    }
}

template_path = typo3conf/ext/zfitsite

# Fluid Styled Content
styles.templates.templateRootPath = EXT:zfitsite/Resources/Private/Templates/Extensions/fluid_styled_content/Templates
styles.templates.partialRootPath = EXT:zfitsite/Resources/Private/Templates/Extensions/fluid_styled_content/Partials
styles.templates.layoutRootPath = EXT:zfitsite/Resources/Private/Templates/Extensions/fluid_styled_content/Layouts

# Main Content
styles.content.imgtext.maxW = 1200
styles.content.imgtext.maxWInText = 0
styles.content.imgtext.linkWrap.width = 1000
styles.content.loginform.pid = 0
styles.content.textmedia.maxW = 1000
styles.content.textmedia.maxWInText = 1000
styles.content.textmedia.linkWrap.lightboxEnabled = 1
styles.content.defaultHeaderType = 1

# Gallery
plugin.tx_nsalllightbox.settings.type = lightbox
plugin.tx_sffilecollectiongallery.view.templateRootPath = EXT:zfitsite/Resources/Private/Templates/Extensions/sf_filecollection_gallery/Templates/
plugin.tx_sffilecollectiongallery.view.partialRootPath = EXT:zfitsite/Resources/Private/Templates/Extensions/sf_filecollection_gallery/Partials/
plugin.tx_sffilecollectiongallery.view.layoutRootPath = EXT:zfitsite/Resources/Private/Templates/Extensions/sf_filecollection_gallery/Layouts/
plugin.tx_sffilecollectiongallery.settings.cssFile = EXT:zfitsite/Resources/Public/css/gallery.css
plugin.tx_sffilecollectiongallery.settings.image.width = 370
plugin.tx_sffilecollectiongallery.settings.lightbox = lightbox[grup999]
plugin.tx_sffilecollectiongallery.settings.image.lightboxWidth = 1000

# Powermail
plugin.tx_powermail.view.templateRootPath = EXT:zfitsite/Resources/Private/Templates/Extensions/powermail/Templates/
plugin.tx_powermail.view.partialRootPath = EXT:zfitsite/Resources/Private/Templates/Extensions/powermail/Partials/
plugin.tx_powermail.view.layoutRootPath = EXT:zfitsite/Resources/Private/Templates/Extensions/powermail/Layouts/
