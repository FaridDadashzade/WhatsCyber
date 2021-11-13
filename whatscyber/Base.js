/*# Copyright (C) 2021 The CyberSpaceAZ Company LLC.
#
# Licensed under the CyberSpaceAZ Public License, Version 1.c (the "License");
# you may not use this file except in compliance with the License.
#
# Thanks github.com/spechide for creating inline bot support.
# WhatsCyber - FaridDadashzade*/


'use strict';

class Base {
    constructor(client) {
        Object.defineProperty(this, 'client', { value: client });
    }

    _clone() {
        return Object.assign(Object.create(this), this);
    }
    
    _patch(data) { return data; }
}

module.exports = Base;
