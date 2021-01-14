import { Paragraph, Tab, Tabs } from "@moai/core";

const Second = () => (
	<Paragraph>
		Second tab
		<br />
		<br />
		Lorem ipsum dolor sit amet
	</Paragraph>
);

const First = () => (
	<Paragraph>
		First tab
		<br />
		<br />
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
		tempor incididunt ut labore et.
	</Paragraph>
);

const Third = () => <Paragraph>Third tab</Paragraph>;

const tabs: Tab[] = [
	{ id: "1", title: "First", pane: First },
	{ id: "2", title: "Second", pane: Second },
	{ id: "3", title: "Third", pane: Third },
];

export const Tab1Gallery = () => <Tabs children={tabs} />;

export const Tab2Gallery = () => (
	<Tabs children={tabs} style={Tabs.styles.flat} />
);

export const Tab3Gallery = () => (
	<div style={{ height: 300 }}>
		<Tabs children={tabs} fullHeight />
	</div>
);
