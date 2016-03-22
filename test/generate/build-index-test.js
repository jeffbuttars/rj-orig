import test from 'ava'
import buildIndex from '../../src/generate/build-index'

test('adds project name', t => {
  t.plan(1)

  const output = buildIndex('awesome')
  t.true(output.includes('awesome'))
})

test('is an html page', t => {
  t.plan(1)

  const output = buildIndex('awesome')
  t.true(output.includes('<html'))
})
