import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LifehookComponent } from './lifehook/lifehook.component';
import { LifeHookParentComponent } from './lifehook/lifehookparent.component';
import { InteractionComponent } from './interaction/interaction.component';
import { VoterComponent } from './interaction/voter.component';
import { StyleComponent } from './componentstyle/style.component';
import { StyleChildComponent } from './componentstyle/style-child.component';
import { DynamicLoadComponent } from './ad/dynamic-load.component';
import { HeroJobAdComponent } from './ad/hero-job-ad.component';
import { HeroProfileComponent } from './ad/hero-profile.component';
import { AdBannerComponent } from './ad/ad-banner.component';
import { AdDirective } from './ad/ad.directive';
import { AdService } from './ad/ad.service';
import { HttpClientModule } from '@angular//common/http';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { HighlightDirective } from './attribute-directive/highlight.directive';
import { PipeTemplateComponent } from './pipe-template/pipe-template.component';
import { ExponentialStrengthPipe } from './pipe-template/exponential-strength.pipe';
import { FetchJsonPipe } from './pipe-template/fetch-json.pipe';
import {
  FlyingHeroesPipe,
  FlyingHeroesImpurePipe
} from './pipe-template/flying-heroes.pipe';
import {
  FlyingHeroesComponent,
  FlyingHeroesImpureComponent
} from './pipe-template/flying-heroes.component';
import { AnimationTemplateComponent } from './animation-template/animation-template.component';
import { HeroService } from './animation-template/hero.service';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';
import { UnlessDirective } from './structural-directive/unless.directive';
import { heroSwitchComponents } from './structural-directive/hero-switch.components';

@NgModule({
  declarations: [
    AppComponent,
    LifehookComponent,
    LifeHookParentComponent,
    InteractionComponent,
    VoterComponent,
    StyleComponent,
    StyleChildComponent,
    DynamicLoadComponent,
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    AdDirective,
    AttributeDirectiveComponent,
    HighlightDirective,
    PipeTemplateComponent,
    ExponentialStrengthPipe,
    FetchJsonPipe,
    FlyingHeroesPipe,
    FlyingHeroesImpurePipe,
    FlyingHeroesComponent,
    FlyingHeroesImpureComponent,
    AnimationTemplateComponent,
    StructuralDirectiveComponent,
    UnlessDirective,
    heroSwitchComponents,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  entryComponents: [
    HeroJobAdComponent,
    HeroProfileComponent
  ],
  providers: [AdService, HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
