import gulp from 'gulp'

import {
  compileScripts,
  lintScripts,
  watchScripts,
} from './scripts'

import {
  compileMarkup,
  watchMarkup,
} from './markup'

const lint = gulp.parallel( lintScripts)
lint.description = 'lint all source'

const compile = gulp.parallel(compileMarkup,  compileScripts)
compile.description = 'compile all source'

const watch = gulp.parallel(watchMarkup,  watchScripts)
watch.description = 'watch for changes to all source'

export {
  compile,
  lint,
  watch,
}