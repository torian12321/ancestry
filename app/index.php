<?php require_once __dir__ . '/html/_header.php'; ?>


<div id="header">
	<div class="container">
		<div class="row">

			<ul class="breadcrumbs">
				<li><a href="#">Home</a></li>
				<li><a href="#">Search</a></li>
				<li><a>US Military Collection</a></li>
			</ul>
			<h1>U.S. Military Collection</h1>

		</div>
	</div>
</div>


<div id="main-area">

<div class="container">
	<div class="row">

		<div class="xs-12 md-8">
			<div class="panel panelMain">
				<h2>World conflicts. Personal stories.</h2>
				<span>
					Throughout history, millions of courageous men and women have served and protected their country in times of conflict. Were your ancestors among them? It’s never been easier to find out on Ancestry.com, the world’s largest online collection of family history resources, including millions of military records spanning from before the Revolutionary War all the way up to Vietnam.
				</span>
				<img src="<?php echo $GLOBALS['imgDir'];?>personal_stories.jpg" alt="">
				<span>
					Search through enlightening historical documents from every major U.S. war from the American Revolution through Vietnam, including draft registration cards, veterans’ gravesites, soldier pension indexes, enlistment records, muster rolls and much more.
				</span>
				<button class="btn btn-sec" id="btnSearch">Search all millitary records</button>
			</div>
		</div>

	<div class="xs-12 md-4">
		<?php require_once __dir__ . '/html/components/sideBar.php'; ?>
	</div>



	</div>
</div>
</div>

<?php require_once __dir__ . '/html/components/modal.php'; ?>
<?php require_once __dir__ . '/html/footer.php'; ?>
<?php require_once __dir__ . '/html/_footer.php'; ?>