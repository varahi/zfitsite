<?php
defined('TYPO3_MODE') || die('Access denied.');

call_user_func(
    function()
    {

        \TYPO3\CMS\Extbase\Utility\ExtensionUtility::configurePlugin(
            'T3Dev.Zfitsite',
            'Zfitsite',
            [
                
            ],
            // non-cacheable actions
            [
                
            ]
        );

    // wizards
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
        'mod {
            wizards.newContentElement.wizardItems.plugins {
                elements {
                    zfitsite {
                        iconIdentifier = zfitsite-plugin-zfitsite
                        title = LLL:EXT:zfitsite/Resources/Private/Language/locallang_db.xlf:tx_zfitsite_zfitsite.name
                        description = LLL:EXT:zfitsite/Resources/Private/Language/locallang_db.xlf:tx_zfitsite_zfitsite.description
                        tt_content_defValues {
                            CType = list
                            list_type = zfitsite_zfitsite
                        }
                    }
                }
                show = *
            }
       }'
    );
		$iconRegistry = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\TYPO3\CMS\Core\Imaging\IconRegistry::class);
		
			$iconRegistry->registerIcon(
				'zfitsite-plugin-zfitsite',
				\TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
				['source' => 'EXT:zfitsite/Resources/Public/Icons/user_plugin_zfitsite.svg']
			);
		
    }
);
