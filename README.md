Kaffeine
========

* Progressively enhance Javascript syntax: ensure vanilla Javascript still works as normal
* avoid nice-to-haves, concentrate on small useful feature set and pragmatism
* Hackable, modular, extendable and testable
* avoid siginificant whitespace. It looks nice, but is painful to work with.


See weepy.github.com/kaffeine


Tests
=====

* via Node
  - <code>bin/expect</code> will run all tests
  - <code>bin/expect file_name</code> will a particular test e.g. <code>bin/expect expectations/arrow</code>
* via Browser
  - load browser/runner.html

* Integration tests:
  - node test/test_node.js
  - knode test/test_knode.js

Building tests for the browser
=====

bin/build

depends on brequire (http://github.com/weepy/brequire). 

Install
=======

npm install kaffeine (TBD)

Use
===

Compile a script from the command line:
<pre>kaffeine -c /path/to/script.k</pre>

See <code>kaffeine --help</code> for more


Run a kaffeine file directly
<pre>knode /path/to/script.k</pre>

require kaffeine files in scripts (in this case my_script.k):
<pre>
require('kaffeine')
require('my_script')
</pre>

TODO
====

* npm install
* nested for loops problem?