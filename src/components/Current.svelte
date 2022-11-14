<script lang="ts">
  import { onMount } from "svelte"
  export let project

  let startDateStr:String = ''
  let endDateStr:String = ''



  const getMYText = (dateStr:String) => {
    const d = new Date(dateStr)
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    // const d = new Date("2021-03-25");
    let month = months[d.getMonth()];

    // var month = dateObj.getUTCMonth() + 1; //months from 1-12
    // var day = dateObj.getUTCDate();
    // var year = dateObj.getUTCFullYear();

    // return + month + "/" + day; year + "/" 
    return month + ' ' + d.getUTCFullYear() 
  }

  if (project != null) {
    
  // console.log(project.title)
    // console.log(project.endDate)
    if (project.startDate != null && project.startDate != '') {
      startDateStr = getMYText(project.startDate)
      if (project.endDate != null && project.endDate != '') {
        endDateStr = " - " + getMYText(project.endDate)
      } else {
        endDateStr = " - Present"
      }
    } 
    else if (project.endDate != null && project.endDate != '') {
      endDateStr = getMYText(project.endDate)
    }
  }
</script>

<div class="project-wrapper uk-card uk-card-default uk-card-body uk-width-1-2@m">
    <h3 class="uk-card-title">&#10043; {project.title}</h3>
    {#if startDateStr != '' || endDateStr != ''}
      <h4 class="date-header">{startDateStr}{endDateStr}</h4>
    {/if}
    <img class="proj-img" src={project.image} style={project.imageStyle} alt="Main img" />
    <p>{project.description}</p>
    <!-- {#if project.productLink != '' || project.productCode != ''}
      <div class="uk-flex uk-flex-between project-buttons-wrapper">
        {#if project.productLink != ''}
          <a href={project.productLink} target="_blank" rel="noreferrer"><button class="project-view view-project" data-project="hearthstone-book">View app</button></a>
        {/if}
        {#if project.productCode != ''}
          <a href={project.productCode} target="_blank" rel="noreferrer"><button class="project-code view-project view-code" data-code="hearthstone-book">View code</button></a>
        {/if}
      </div>
    {/if} -->
</div>

<style>
  .proj-img {
    margin-top: 10px;
  }
  
  .project-wrapper {
    background: #fff;
    max-width: 600px;
    /* margin: 15px; */
    /* margin: 0 0 30px; */
    margin: 0 0 45px;
    opacity: 1;

    /* box-shadow: none !important; */
    box-shadow: none;
    border: 1px solid #eee;

    transition: background 1s, border 2s, box-shadow 1s, margin-bottom 1.5s;
    animation: projectFade 4s;
  }
  
  .project-wrapper:hover {
    background: #fdfdfd;
    border: 1px bevel #ccc;
    box-shadow: 0 0 1px 2px rgba(122, 122, 122, 0.1);
  }

  @keyframes projectFade {
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

  .project-buttons-wrapper {
    /* display: inline-block; */
  }

  h3 {
    font-family: "Trebuchet MS";
    font-weight: bold;
    letter-spacing: 1px;
    /* text-transform: uppercase; */
    /* color: #5555dd !important; */
    margin-bottom: 0;
  }

  h4 {
    color: #999;
    font-size: 0.9em;
    margin: 0 0 10px;
  }

  @media screen and (max-width: 1200px) {
    
  .project-wrapper {
    /* margin: 15px; */
    /* margin: 0; */
    margin: 0;
  }
}
</style>