 tt_content.gridelements_pi1.10 =< lib.stdheader
 
 tt_content.gridelements_pi1.20.10.setup {
  
  # Main container
  1 < lib.gridelements.defaultGridSetup
  1 {
    wrap = <main class="mt-5">|</main>
    innerWrap = <div class="container">|</div>
    columns {
      # colPos ID
      0 < .default
      0 {
        wrap = |
        innerWrap =  |
      }           
    } # end columns
  } # end grid 1
  
  2 < lib.gridelements.defaultGridSetup
  2 {
    cObject = FLUIDTEMPLATE
    cObject {
      file = typo3conf/ext/zfitsite/Resources/Private/Templates/Extensions/Gridelements/Section.html
    }
  } # end grid 2 
  
  3 < lib.gridelements.defaultGridSetup
  3 {
    cObject = FLUIDTEMPLATE
    cObject {
      file = typo3conf/ext/zfitsite/Resources/Private/Templates/Extensions/Gridelements/Parallax.html
    }
  } # end grid 3  
  
}
