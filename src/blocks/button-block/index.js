var registerBlockType = wp.blocks.registerBlockType;
var __ = wp.i18n.__;
var el = wp.element.createElement;

registerBlockType('tophat-blocks/button-block', {
  title: __('Button Block', 'tophat-blocks'),
  description: __('A Custom Button Block', 'tophat-blocks'),
  category: 'design',
  icon: 'admin-network',
  keywords: [ __('button', 'tophat-blocks'), __('link', 'tophat-blocks'), __('custom', 'tophat-blocks')],
  edit: function() {
    return el('p', null, 'Editor');
  },
  save: function() {
    return el('p', null, 'Saved content');;
  }
})