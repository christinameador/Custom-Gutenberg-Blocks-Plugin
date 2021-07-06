import './styles.editor.scss';
import { registerBlockType, BlockAlignmentToolbar, InspectorControls } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import { RichText, AlignmentToolbar, BlockControls } from "@wordpress/editor";
import { Button, Toolbar, Tooltip, PanelBody, PanelRow, FormToggle } from '@wordpress/components';

const { __ } = wp.i18n;
const { registerBlockType, BlockAlignmentToolbar, InspectorControls, RichText, AlignmentToolbar, BlockControls } = wp.blocks;
const { Button, Toolbar, Tooltip, PanelBody, PanelRow, FormToggle } = wp.components;

// Register Block
registerBlockType( 'tophat-blocks/tophat-button-block', {
  title: __( 'Tophat Button Block', 'tophat-blocks' ),
  description: __( 'A Custom Button Block for TopHat', 'tophat-blocks' ),
  category: 'design',
  icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M18.25 7.6l-5.5-3.18c-.46-.27-1.04-.27-1.5 0L5.75 7.6c-.46.27-.75.76-.75 1.3v6.35c0 .54.29 1.03.75 1.3l5.5 3.18c.46.27 1.04.27 1.5 0l5.5-3.18c.46-.27.75-.76.75-1.3V8.9c0-.54-.29-1.03-.75-1.3zM7 14.96v-4.62l4 2.32v4.61l-4-2.31zm5-4.03L8 8.61l4-2.31 4 2.31-4 2.32zm1 6.34v-4.61l4-2.32v4.62l-4 2.31zM7 2H3.5C2.67 2 2 2.67 2 3.5V7h2V4h3V2zm10 0h3.5c.83 0 1.5.67 1.5 1.5V7h-2V4h-3V2zM7 22H3.5c-.83 0-1.5-.67-1.5-1.5V17h2v3h3v2zm10 0h3.5c.83 0 1.5-.67 1.5-1.5V17h-2v3h-3v2z"/></svg>,
  keywords: [ 
    __( 'button', 'tophat-blocks' ), 
    __( 'link', 'tophat-blocks' ), 
    __( 'custom', 'tophat-blocks' )
  ],
  attributes: {
    message: {
      type: 'array',
      source: 'children',
      selector: '.message-body',
    },
    textAlignment: {
      type: 'string',
    }
  },
  edit: props => {
    const {
        attributes: { textAlignment, message },
        className, setAttributes } = props;

    return (
      <div className={ className } >
          <BlockControls>
              <AlignmentToolbar
                  value={ textAlignment }
                  onChange={ textAlignment => setAttributes( { textAlignment } ) }
              />
          </BlockControls>
          <RichText
              tagName="div"
              multiline="p"
              placeholder={ 'Enter your message here..' }
              value={ message }
              style={ { textAlign: textAlignment } }
              onChange={ message => setAttributes( { message } ) }
          />
          <Button>Button Component</Button>
      </div>
    );
  },
  save: props => {
    const { textAlignment, message } = props.attributes;
    return (
      <div 
          className="message-body" 
          style={ { textAlign: textAlignment } } 
      >
        { message }
      </div>
    );
  },
} );
