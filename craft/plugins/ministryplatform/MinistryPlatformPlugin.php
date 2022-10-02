<?php

namespace Craft;

require 'vendor/autoload.php';

class MinistryPlatformPlugin extends BasePlugin {

    function getName() {
        return Craft::t('Ministry Platform Plugin');
    }

    function getVersion() {
        return '1.0';
    }

    function getDeveloper() {
        return 'Generic Church';
    }

    function getDeveloperUrl() {
        return 'http://faithpromise.org';
    }

}