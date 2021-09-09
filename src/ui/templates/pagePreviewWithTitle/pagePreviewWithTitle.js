import {renderPagePreviewWithButton} from '../pagePreviewWithButton/pagePreviewWithButton';
import {escapeHTML} from '../templateUtil';

export function renderPagePreviewWithTitle(model, thumbnail) {
	if (model.extract[0].textContent === '...') {
		return null;
	}

	const $el = renderPagePreviewWithButton(model, thumbnail)
	const title = escapeHTML(model.title)

	$el.find('.mwe-popups-header')
		.html(`<h4>${title}</h4>`);
	return $el;
}
