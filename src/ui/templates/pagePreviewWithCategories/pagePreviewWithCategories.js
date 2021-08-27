import {renderPagePreview} from '../pagePreview/pagePreview';
import {escapeHTML} from "../templateUtil";

const mw = mediaWiki;

export function renderPagePreviewWithCategories(model, thumbnail) {
	const $el = renderPagePreview(model, thumbnail);
	const title = escapeHTML(model.title);

	$el.find('.mwe-popups-container')
		.prepend(`<div class="mwe-popups-header"><h4>${title}</h4></div>`);

	const categories = model.categories;
	if (categories.length === 0) {
		return $el;
	}

	const $categoriesList = $('<ul></ul>');
	model.categories.forEach((category) => {
		const title = mw.Title.newFromText(category.title);
		const url = escapeHTML(title.getUrl());
		const text = escapeHTML(title.getMainText())

		$categoriesList.append(`<li><a href="${url}" target="_blank">${text}</a></li>`)
	});

	$el.find('.mwe-popups-extract').html($categoriesList)

	return $el;
}
