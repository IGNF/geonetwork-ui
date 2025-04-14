import{d as t}from"./chunks/migrations.data.D5ARBIg0.js";import{c as h,a3 as o,j as s,N as p,k as i,t as a,o as r}from"./chunks/framework.BU4YErrW.js";const k={style:{display:"flex","flex-direction":"row",gap:"16px"}},d={class:"custom-block-title"},c={style:{"white-space":"preserve-breaks"}},E={class:"custom-block caution",style:{"flex-grow":"1"}},g={class:"custom-block-title"},y={style:{display:"flex","flex-direction":"row",gap:"16px"}},m={class:"custom-block-title"},u={style:{"white-space":"preserve-breaks"}},b={class:"custom-block caution",style:{"flex-grow":"1"}},F={class:"custom-block-title"},D=JSON.parse('{"title":"Writing components","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"developers/writing-components.md","filePath":"developers/writing-components.md"}'),f={name:"developers/writing-components.md"},_=Object.assign(f,{setup(v){const e=Math.ceil(t.standaloneComponents.completionRatio*100),l=Math.ceil(t.storybookEntries.completionRatio*100);return(C,n)=>(r(),h("div",null,[n[0]||(n[0]=o('<h1 id="writing-components" tabindex="-1">Writing components <a class="header-anchor" href="#writing-components" aria-label="Permalink to &quot;Writing components&quot;">​</a></h1><p>This guide provides several guidelines when writing Angular components in the project. <strong>Please follow them unless you have a good reason not to do so!</strong></p><h2 id="standalone-components" tabindex="-1">Standalone components <a class="header-anchor" href="#standalone-components" aria-label="Permalink to &quot;Standalone components&quot;">​</a></h2><p>Standalone components have become the norm in Angular. Components in the project should all be made standalone over time; this means that <strong>new components must be standalone</strong> and that <strong>existing components should be made standalone when modified</strong> if it is possible (i.e. when that does not represent a disproportionate amount of work compared to the original task).</p><p>Standalone components have the following differences with legacy &quot;non-standalone&quot; ones:</p><ul><li>Standalone components are <em>not</em> declared in Angular Modules; instead, they act as their own module, declaring their own dependencies and providers</li><li>Standalone components can import either Angular modules or other standalone components</li></ul><p>This is the progression status of the Standalone Component migration:</p>',7)),s("div",k,[s("div",{style:p("width: "+i(e)+"%"),class:"custom-block tip"},[s("p",d,a(i(e))+"% done",1),s("p",c,a(i(t).standaloneComponents.infos),1)],4),s("div",E,[s("p",g,a(100-i(e))+"% remaining",1)])]),n[1]||(n[1]=o(`<h2 id="storybook-entry" tabindex="-1">Storybook entry <a class="header-anchor" href="#storybook-entry" aria-label="Permalink to &quot;Storybook entry&quot;">​</a></h2><p>All presentation components should appear in Storybook (launched through <code>npm run storybook</code>). <strong>This applies to any component in the <code>ui/*</code> libs</strong>, as well as any other component that might benefit from an isolated live testing environment.</p><p>An introduction to creating Storybook entries for Angular components can be found <a href="https://storybook.js.org/docs/get-started/whats-a-story" target="_blank" rel="noreferrer">here</a>.</p><p>A typical Storybook entry should:</p><ul><li>let the user manipulate all inputs in all ways possible in order to see how the component reacts</li><li>let the user see all outputs emitted by the component</li><li>let the user resize the container in which the component sits in order to see how the component handles its size; this can be done like so:<div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  decorators: [</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // ...</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    componentWrapperDecorator</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">story</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &lt;div class=&quot;border border-gray-300&quot; style=&quot;width: 450px; height: 100px; resize: both; overflow: auto&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">           \${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">story</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &lt;/div&gt;\`</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Meta</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">MyComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div></li></ul><p>This is the progression status of creating Storybook entries for all presentation (UI) components:</p>`,6)),s("div",y,[s("div",{style:p("width: "+i(l)+"%"),class:"custom-block tip"},[s("p",m,a(i(l))+"% done",1),s("p",u,a(i(t).storybookEntries.infos),1)],4),s("div",b,[s("p",F,a(100-i(l))+"% remaining",1)])]),n[2]||(n[2]=o(`<h3 id="storybook-entries-for-standalone-components" tabindex="-1">Storybook entries for standalone components <a class="header-anchor" href="#storybook-entries-for-standalone-components" aria-label="Permalink to &quot;Storybook entries for standalone components&quot;">​</a></h3><p>Storybook entries for standalone components are usually straightforward to set up:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  title: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Category/MyStandaloneComponent&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  component: MyStandaloneComponent,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  decorators: [</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // module imports may not be required since the component should already import everything it needs</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    applicationConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      providers: [</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // provide here what&#39;s needed; for translation this is:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        importProvidersFrom</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(UtilI18nModule),</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        importProvidersFrom</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(TranslateModule.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">forRoot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">TRANSLATE_DEFAULT_CONFIG</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Meta</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">MyStandaloneComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="stories-for-legacy-non-standalone-components" tabindex="-1">Stories for legacy non-standalone components <a class="header-anchor" href="#stories-for-legacy-non-standalone-components" aria-label="Permalink to &quot;Stories for legacy non-standalone components&quot;">​</a></h3><p>Legacy components will often rely on other modules. These should be imported like so:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  title: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Category/MyComponent&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  component: MyComponent,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  decorators: [</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    moduleMetadata</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      imports: [</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // import whatever module is required</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // ...</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // note: these are required if the module needs translations:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        UtilI18nModule,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        TranslateModule.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">forRoot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">TRANSLATE_DEFAULT_CONFIG</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }),</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    applicationConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      providers: [</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // provider wheter is needed here</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Meta</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">MyComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>`,6))]))}});export{D as __pageData,_ as default};
