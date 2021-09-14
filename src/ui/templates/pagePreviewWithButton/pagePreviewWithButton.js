import {renderPagePreview} from '../pagePreview/pagePreview';
import {escapeHTML} from '../templateUtil';

const mw = mediaWiki;

/**
 * Move settings position close to text for tall images
 *
 * @param $el
 * @param $container
 */
const adjustSettingsPosition = ($el, $container) => {
	const $textSection = $('<div class="mwe-popups-text-section"></div>');
	const $textElement = $el.find('.mwe-popups-extract');
	const $settingsIcon = $el.find('.mwe-popups-settings-icon');
	$textSection.append(
		$textElement,
		$settingsIcon
	);

	$el.find('footer').remove();
	$el.find('.mwe-popups-discreet svg').css({position: 'absolute'});
	$container.append($textSection);
}

export function renderPagePreviewWithButton(model, thumbnail) {
	const url = escapeHTML(model.url);
	const $el = renderPagePreview(model, thumbnail)

	const $buttonSection = $('<div class="mwe-popups-buttons-section"></div>')
	$buttonSection.append(`<a href="${url}" target="_blank" class="wds-button">${mw.msg('popups-fandom-action-button')}</a>`);

	const $container = $el.find('.mwe-popups-container')
		.addClass('mwe-popups-fandom')
		.prepend(`<div class="mwe-popups-header">${mw.msg('popups-fandom-header-text')}</div>`);

	$container.append($buttonSection);

	return $el;
}
