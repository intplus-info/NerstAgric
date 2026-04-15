import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'

import {schema} from './sanity/schemaTypes'
import {structure} from './sanity/structure'

export default defineConfig({
  name: 'default',
  title: 'NerstAgric',

  projectId: 'nr2w4b6y',
  dataset: 'production',

  plugins: [
    structureTool({structure}),
    visionTool()
  ],

  schema,
})