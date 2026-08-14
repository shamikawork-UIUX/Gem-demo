export interface GuideEntry {
  id: string;
  title: string;
  summary: string;
  body: string[];
  accent: 'sapphire' | 'ruby' | 'emeraldg' | 'amethyst' | 'gold';
}

export const guideEntries: GuideEntry[] = [
{
  id: 'carat',
  title: 'Carat — weight, not size',
  summary: 'Why two 3ct stones can look very different on the hand.',
  accent: 'sapphire',
  body: [
  'A carat is 0.2 grams. It measures weight, not the size you actually see when the stone is set.',
  'Sapphire and ruby are denser than diamond, so a 2ct sapphire faces up smaller than a 2ct diamond. A deep-cut stone hides weight in the pavilion, while a well-proportioned stone spreads it across the face.',
  'When size matters to you, ask us for the millimetre dimensions as well as the carat weight. We list both on every stone.']

},
{
  id: 'colour',
  title: 'Colour — hue, tone and saturation',
  summary: 'The single biggest driver of price in a coloured stone.',
  accent: 'ruby',
  body: [
  'Colour is read in three parts: hue (which colour), tone (how light or dark) and saturation (how vivid).',
  'For Ceylon sapphire, the most sought-after descriptions are cornflower and royal blue — medium tone with strong saturation and no grey. Very dark stones lose life; very pale stones lose presence.',
  'Screens lie. We photograph in consistent daylight-balanced light and will always show you the stone on a live video call before you commit.']

},
{
  id: 'clarity',
  title: 'Clarity — expect some nature',
  summary: 'Inclusions are normal in coloured stones, and sometimes desirable.',
  accent: 'emeraldg',
  body: [
  'Coloured stones are graded by eye, not under 10× magnification like diamonds. "Eye clean" means no inclusions visible to the unaided eye at normal viewing distance.',
  'Fine silk can soften and spread light beautifully, and is what creates the star in a star sapphire. Inclusions are also part of how a laboratory confirms a stone is natural.',
  'What we avoid: inclusions that reach the surface, break the durability of the stone, or sit dead-centre under the table.']

},
{
  id: 'cut',
  title: 'Cut — where brilliance comes from',
  summary: 'A well-cut stone returns light; a poorly cut one leaks it.',
  accent: 'amethyst',
  body: [
  'Coloured stones are cut to keep colour and weight, so proportions vary far more than in diamonds. That is normal.',
  'The two things to check face up: a window (a see-through patch in the centre, meaning light passes straight through) and extinction (dead dark zones). We flag both honestly in our descriptions.',
  'Cut also decides shape — oval, cushion, round, emerald, pear. Choose the shape you love, then judge the quality of the cutting within it.']

},
{
  id: 'treatments',
  title: 'Treatments — what is acceptable',
  summary: 'Traditional heat is normal. Everything else must be disclosed.',
  accent: 'gold',
  body: [
  'Traditional heat treatment has been used in Sri Lanka for centuries to improve colour and clarity. It is stable, permanent and accepted throughout the trade.',
  'Unheated stones of good colour are rarer and command a significant premium — which is exactly why the claim needs a laboratory report behind it.',
  'Treatments we do not sell: glass or lead-glass filling, diffusion, dyeing and irradiation. Every Ruth Gems listing states its treatment status in plain words.']

},
{
  id: 'certification',
  title: 'How certification works',
  summary: 'What a report does and does not tell you.',
  accent: 'sapphire',
  body: [
  'A gemmological report from a laboratory such as GIA or GRS identifies the species, states the weight and dimensions, and discloses detected treatments. Some reports also give an origin opinion.',
  'A report is not a valuation and not a guarantee of beauty. Two stones with identical reports can look nothing alike.',
  'Every certified stone here shows the issuing lab and the report number, and you can view the document itself, front and back, on the listing. Uncertified stones are labelled as such — and we can arrange certification at cost before shipping.']

},
{
  id: 'before-buying',
  title: 'Before you buy',
  summary: 'Five questions worth asking any dealer.',
  accent: 'ruby',
  body: [
  'Is the stone natural, and has it been treated? Ask for it in writing.',
  'Can I see it under different lighting, live, before I decide?',
  'What are the millimetre dimensions, not just the carat weight?',
  'If it is certified, may I have the report number to verify with the laboratory directly?',
  'What happens if it is not what I expected when it arrives? Ask before, not after.']

}];