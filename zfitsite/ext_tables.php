<?php
defined('TYPO3_MODE') || die('Access denied.');

call_user_func(
    function()
    {

        \TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerPlugin(
            'T3Dev.Zfitsite',
            'Zfitsite',
            'Zfit Site'
        );

        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile('zfitsite', 'Configuration/TypoScript', 'Zfit Site');

    }
);
