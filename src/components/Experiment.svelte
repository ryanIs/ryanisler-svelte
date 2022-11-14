<script lang="ts">
  /**
   * Experiment.svelte
   */

  export let experiment

  let startDateStr:String = ''
  let endDateStr:String = ''

  const getMYText = (dateStr:String) => {
    const d = new Date(dateStr)
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = months[d.getMonth()];
    return month + ' ' + d.getUTCFullYear() 
  }

  if (experiment != null) {
    if (experiment.startDate != null && experiment.startDate != '') {
      startDateStr = getMYText(experiment.startDate)
      if (experiment.endDate != null && experiment.endDate != '') {
        endDateStr = " - " + getMYText(experiment.endDate)
      } else {
        endDateStr = " - Present"
      }
    } 
    else if (experiment.endDate != null && experiment.endDate != '') {
      endDateStr = getMYText(experiment.endDate)
    }
  }
</script>

<div class="experiment-wrapper uk-card uk-card-default uk-card-body uk-width-1-2@m">
    <h3 class="uk-card-title">&#10023; {experiment.title}</h3>
    {#if startDateStr != '' || endDateStr != ''}
      <h4 class="date-header">{startDateStr}{endDateStr}</h4>
    {/if}
    <img class="proj-img uk-align-center" src={experiment.image} style={experiment.imageStyle} alt="Main img" />
    <p>{experiment.description}</p>
    {#if experiment.productLink != '' || experiment.productCode != ''}
      <div class="uk-flex uk-flex-between experiment-buttons-wrapper">
        {#if experiment.productLink != ''}
          <a href={experiment.productLink} target="_blank" rel="noreferrer"><button class="experiment-view view-project" data-experiment="hearthstone-book">App</button></a>
        {/if}
        {#if experiment.productCode != ''}
          <a href={experiment.productCode} target="_blank" rel="noreferrer"><button class="experiment-code view-project view-code" data-code="hearthstone-book">Code</button></a>
        {/if}
      </div>
    {/if}
</div>

<style>
  .proj-img {
    margin-top: 10px;
    /* margin: 10px auto 0; */
    display: block;
  }
  
  .experiment-wrapper {
    background: #fff;
    max-width: 300px;
    /* margin: 15px; */
    margin: 0 0 21px;
    opacity: 1;

    /* box-shadow: none !important; */
    box-shadow: none;
    border: 1px solid #eee;

    transition: background 1s, border 2s, box-shadow 1s;
    animation: experimentFade 2s;
  }
  
  .experiment-wrapper:hover {
    background: #fdfdfd;
    border: 1px bevel #ccc;
    box-shadow: 0 0 1px 2px rgba(122, 122, 122, 0.1);
  }

  @keyframes experimentFade {
    0% {
      opacity: 0.0;
    }
    20% {
      opacity: 0.0;
    }
    100% {
      opacity: 1;
    }
  }

  .experiment-buttons-wrapper {
    /* display: inline-block; */
  }

  h3 {
    font-family: "Trebuchet MS";
    font-weight: bold;
    letter-spacing: 1px;
    /* text-transform: uppercase; */
    /* color: #5555dd !important; */
    margin-bottom: 0;
    font-size: 16px;
  }

  h4 {
    color: #999;
    font-size: 0.9em;
    margin: 0 0 10px;
  }

  @media screen and (max-width: 1200px) {
    .experiment-wrapper {
      margin: 0;
      max-width: auto;
    }
  }
</style>