<?php

namespace App\Nova\Lenses;

use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Fields\Number;
use Laravel\Nova\Http\Requests\LensRequest;
use Laravel\Nova\Http\Requests\NovaRequest;
use Laravel\Nova\Lenses\Lens;
use Illuminate\Support\Facades\DB;

class MostPostedUsers extends Lens
{
    /**
     * Get the query builder / paginator for the lens.
     *
     * @param  \Laravel\Nova\Http\Requests\LensRequest  $request
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return mixed
     */
    public static function query(LensRequest $request, $query)
    {
        return $request->withOrdering($request->withFilters(
            $query->select(self::columns())
                ->join('posts', 'users.id', '=', 'posts.user_id')
                ->orderBy('post_count', 'desc')
                ->groupBy('users.id', 'users.name')
        ));
    }

    /**
     * Get the columns that should be selected.
     *
     * @return array
     */
    protected static function columns()
    {
        return [
            'users.id',
            'users.name',
            DB::raw('count(posts.id) as post_count'),
        ];
    }

    /**
     * Get the fields available to the lens.
     *
     * @param  \Laravel\Nova\Http\Requests\NovaRequest  $request
     * @return array
     */
    public function fields(NovaRequest $request)
    {
        return [
            ID::make('ID', 'id'),
            Text::make('Name', 'name'),

            Number::make('post_count', 'post_count', function ($value) {
                return $value;
            }),
        ];
    }

    /**
     * Get the cards available on the lens.
     *
     * @param  \Laravel\Nova\Http\Requests\NovaRequest  $request
     * @return array
     */
    public function cards(NovaRequest $request)
    {
        return [];
    }

    /**
     * Get the filters available for the lens.
     *
     * @param  \Laravel\Nova\Http\Requests\NovaRequest  $request
     * @return array
     */
    public function filters(NovaRequest $request)
    {
        return [];
    }

    /**
     * Get the actions available on the lens.
     *
     * @param  \Laravel\Nova\Http\Requests\NovaRequest  $request
     * @return array
     */
    public function actions(NovaRequest $request)
    {
        return parent::actions($request);
    }

    /**
     * Get the URI key for the lens.
     *
     * @return string
     */
    public function uriKey()
    {
        return 'most-posted-users';
    }
}
